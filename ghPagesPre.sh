# DO NOT EXECUTE THIS FILE IN YOUR WORKING DIRECTORY
# THIS IS MEANT FOR CI/CD ONLY

shopt -s dotglob nullglob

cd website
yarn build
cd ..
find . -not -regex "^\.\/website\/build.*\|^.\/\.git.*" -delete
mv website/build/* ./

# redundant, just to have it clean
rm -rf github-page
