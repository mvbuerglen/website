{ pkgs, ... }:

{
  # See full reference at https://devenv.sh/reference/options/

  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs_22;
  languages.javascript.pnpm.enable = true;
  languages.javascript.pnpm.install.enable = true;

  enterShell = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
