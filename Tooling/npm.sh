# Manage a folder by npm
    $ npm init -y
    // -y say yes to all questions
This will create a "package.json" file, without installing any packages

# Install a package as a development dependency
    $ npm install --save-dev <your-package-name>
This will download the package (and its dependencies) into the "node_modules" folder

- If you change your package.json file, you can always run "npm install" again to update the packages downloaded

# To uninstall a package
    $ npm uninstall <your-package-name>