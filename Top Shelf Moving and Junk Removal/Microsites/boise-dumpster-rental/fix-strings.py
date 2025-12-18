import glob
import re

files = glob.glob('src/components/*.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace single-quoted strings that contain apostrophes with double-quoted strings
    # Pattern: answer: 'text with apostrophes'
    # or text: 'text with apostrophes'
    # or description: 'text with apostrophes'

    def replace_single_with_double(match):
        key = match.group(1)  # answer, text, or description
        string_content = match.group(2)  # the content between quotes
        # Escape any double quotes in the content
        string_content = string_content.replace('"', '\\"')
        return f'{key}: "{string_content}"'

    # Match: (answer|text|description): 'content that may have apostrophes'
    pattern = r"(answer|text|description):\s*'([^']+)'"

    content = re.sub(pattern, replace_single_with_double, content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed: {file}')

print('All files fixed!')
