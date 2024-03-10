import os
import json

def dir_to_json(dir_path):
    """Converts a directory to a JSON file."""
    json_list = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if root.startswith("./.git") is False:
                json_dict = {}
                file_path = os.path.join(root, file)
                json_dict['file_path'] = file_path
                # 读取文件内容
                file_content = open(file_path, 'r', encoding='utf-8').read()
                json_dict['file_content'] = file_content
                json_list.append(json_dict)
                
    with open("context.json", 'w', encoding='utf-8') as f:
        json.dump(json_list, f, ensure_ascii=False, indent=4)
    
if __name__ == "__main__":
    dir_to_json("./src")