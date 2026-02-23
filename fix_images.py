import os, json, random, re, time, ssl, certifi
from urllib.request import Request, urlopen
from urllib.parse import quote

PEXELS_KEY = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk'
POSTS_DIR = 'content/posts'
used_ids = []
ctx = ssl.create_default_context(cafile=certifi.where())

def search_pexels(query):
    url = 'https://api.pexels.com/v1/search?query=' + quote(query) + '&per_page=15&orientation=landscape'
    req = Request(url, headers={
        'Authorization': PEXELS_KEY,
        'User-Agent': 'Geprompt-Bot/1.0'
    })
    resp = urlopen(req, context=ctx)
    return json.loads(resp.read())

for filename in sorted(os.listdir(POSTS_DIR)):
    if not filename.endswith('.md'):
        continue
    filepath = os.path.join(POSTS_DIR, filename)
    with open(filepath, 'r') as f:
        content = f.read()

    tags_match = re.search(r'tags:\s*\[([^\]]*)\]', content)
    if tags_match:
        tags = [t.strip().strip('"').strip("'") for t in tags_match.group(1).split(',')]
        search_term = 'artificial intelligence ' + tags[0] if tags else 'artificial intelligence technology'
    else:
        search_term = 'artificial intelligence technology'

    try:
        result = search_pexels(search_term)
        photos = result.get('photos', [])
        if not photos:
            result = search_pexels('artificial intelligence')
            photos = result.get('photos', [])

        unused = [p for p in photos if p['id'] not in used_ids]
        if not unused:
            used_ids.clear()
            unused = photos

        if unused:
            pick = random.choice(unused)
            used_ids.append(pick['id'])
            image_url = pick['src']['large2x']
            alt = (pick.get('alt') or '').replace('"', '\\"')
            photographer = pick.get('photographer', '')

            content = re.sub(r'\ncover:\n  image:.*?\n  alt:.*?\n  caption:.*?\n', '\n', content)
            new_cover = f'\ncover:\n  image: "{image_url}"\n  alt: "{alt}"\n  caption: "Foto: {photographer} via Pexels"'
            content = content.replace('\ndraft: false', new_cover + '\ndraft: false')

            with open(filepath, 'w') as f:
                f.write(content)
            print(f'OK: {filename} -> {photographer}')
        else:
            print(f'SKIP: {filename} (geen fotos)')
    except Exception as e:
        print(f'ERROR: {filename} -> {e}')

    time.sleep(1)

print('Klaar!')
