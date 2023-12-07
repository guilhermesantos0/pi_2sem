import os
import mimetypes

files = os.listdir()
files.remove("a.py")

for i in range(len(files)):
    if(mimetypes.guess_type(files[i])[0].startswith("image")):
        extension = os.path.splitext(files[i])[1]
        os.rename(files[i], f"{i + 1}{extension}")

    # print(f"{files[i]} - {mimetypes.guess_type(files[i])[0]}")