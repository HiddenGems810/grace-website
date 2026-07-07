import re

with open('public/images/logo.svg', 'r') as f:
    svg = f.read()

# We only want to remove the text class="cls-4" (which is Independent Living)
# The regex will match from <text class="cls-4" up to the next </text>
svg = re.sub(r'<text class="cls-4".*?</text>', '', svg, flags=re.DOTALL)

with open('public/images/logo-no-subtitle.svg', 'w') as f:
    f.write(svg)

print("Done")
