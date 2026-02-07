import json
import os

try:
    with open('lanyard.json', 'r') as f:
        data = json.load(f)
    print(f"Files found in {data.get('name')}:")
    for file in data.get('files', []):
        path = file.get('path')
        print(f" - {path}")
        # Identify component code
        if path.endswith('.tsx') or path.endswith('.ts') or path.endswith('.jsx') or path.endswith('.js'):
            print(f"   -> Found component source in {path}")
            # Extract content to a temporary file
            with open('Lanyard_source.txt', 'w') as out:
                out.write(file.get('content'))
except Exception as e:
    print(f"Error: {e}")
