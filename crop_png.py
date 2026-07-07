from PIL import Image

img = Image.open('public/images/logo-colored.png')

# The image is 858x918
# We want to crop out the subtitle which is at the bottom.
# 'Grace 101' starts at ~ y=691
# 'Independent Living' starts at ~ y=747
# We will crop the image at y=740 to cut off the subtitle but leave Grace 101
cropped = img.crop((0, 0, 858, 740))

# Save the cropped image over the original
cropped.save('public/images/logo-colored.png')

print("Cropped logo-colored.png successfully.")
