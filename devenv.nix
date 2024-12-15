{ pkgs, ... }:

{
  # See full reference at https://devenv.sh/reference/options/

  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs_20;
  languages.javascript.corepack.enable = true;

  enterShell = ''
    export PATH="$PWD/node_modules/.bin:$PATH"

    corepack use pnpm@9
    pnpm i
  '';
}
