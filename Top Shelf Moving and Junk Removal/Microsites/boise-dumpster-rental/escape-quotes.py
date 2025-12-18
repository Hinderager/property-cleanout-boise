import glob
import re

files = glob.glob('src/components/*.tsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all string literals within object values and escape apostrophes
    # This pattern finds answer: 'text with apostrophe'
    def escape_apostrophes(match):
        full_match = match.group(0)
        # Only escape apostrophes inside the string
        # Split at first quote after :
        prefix = full_match[:full_match.index("'") + 1]
        string_content = full_match[full_match.index("'") + 1:-1]
        suffix = full_match[-1]

        # Replace apostrophes but not the delimiters
        escaped_content = string_content.replace("'", "\\'")

        return prefix + escaped_content + suffix

    # Match patterns like: answer: 'text here'
    pattern = r"(answer|text|description):\s*'([^'\\]|\\.)+'|\"([^\"\\\\]|\\\\.)+\""

    # Actually, let's use a simpler approach
    # Just escape all single quotes within strings
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # If line contains answer: ' or text: ' or description: '
        if ("answer: '" in line or "text: '" in line or "description: '" in line):
            # Find the string content
            if "'" in line:
                # Split by first and last quote
                parts = line.split("'")
                if len(parts) >= 3:
                    # parts[0] is before first quote
                    # parts[1] is string content
                    # parts[2] is after last quote
                    parts[1] = parts[1].replace("'", "\\'")
                    line = "'".join(parts[:3])
                    if len(parts) > 3:
                        line += "'".join([""] + parts[3:])
        fixed_lines.append(line)

    content = '\n'.join(fixed_lines)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed: {file}')

print('All files fixed!')
