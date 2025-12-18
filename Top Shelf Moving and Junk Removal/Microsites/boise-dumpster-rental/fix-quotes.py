import glob

files = glob.glob('src/components/*.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace curly apostrophes and quotes with straight ones
    content = content.replace('\u2019', "'")  # Right single quotation mark
    content = content.replace('\u2018', "'")  # Left single quotation mark
    content = content.replace('\u201d', '"')  # Right double quotation mark
    content = content.replace('\u201c', '"')  # Left double quotation mark

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed: {file}')

print('All files fixed!')
