{ pkgs, ... }:

{
  # See full reference at https://devenv.sh/reference/options/

  languages.javascript = {
    enable = true;
    nodejs.enable = true;
    package = pkgs.nodejs_24;
    pnpm.enable = true;
    pnpm.install.enable = true;
  };

  enterShell = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
