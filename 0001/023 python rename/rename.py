import os

os.chdir('../../rename')

for f in os.listdir():
  file_name, file_ext = os.path.splitext(f)
  x = int(file_name) - 2
  z = str(x)
  y=z.zfill(3)+file_ext
  new_name=y

  os.rename(f, new_name)