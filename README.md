## drane.one

### Personal homepage using React and ThreeJS (is up on [drane.one](https://drane.one/))

Slight overkill, but I really wanted to spin some octahedron.

![page screenshot](screenshot.png)

Also pretty clean project, using:
React, ThreeJS, [@react-three/fiber](https://github.com/pmndrs/react-three-fiber),
Vite, ESLint
Docker, Docker Compose, GitHub Actions etc.

For deploy:
[docker-compose-traefik](docker-compose-traefik.yml) file is meant to be used with Traefik on my server/domain, so edit labels if you want to.
Also edit GitHub ([workflow file](/.github/workflows/docker-image.yml)) to specify your compose file.