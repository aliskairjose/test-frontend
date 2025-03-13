![Texto alternativo](1667479076506.jpg "Kervin Gonzalez")

# Prueba Técnica para Desarrollador Front-End Developer
Prueba técnica para postulación a cargo de Desarrollador FrontEnd, prueba realizada por **Kervin Gonzalez**, kevingonzalez@gmail.com.


## Instalación
Asegurese de tener instalado **ionic CLI**, si no lo tiene ejecute el siguiente comando. Para el uso de Capacitor, se requierve versión **NodeJs >= 20**

```
$ npm install -g @ionic/cli
```

## Instalación de dependencias
```bash
$ npm install
```

## Help
Para acceder a los comenados del CLI, ejecute,
```bash
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

## Code scaffolding

- Ejecute `ionic g p`, para generar páginas. 
- Ejecute `ionic g c`, para generar componentes. 
- Ejecute `ionic g s`, para generar servicios. 
- Ejecute `ionic g `, para generar páginas. 

## Build
Ejecute `$ ionic build [options]`, dentro de las opciones puede usar `--prod` para la configuración a producción. `--watch` le permite reconstruir el proyecto cuando haya cambios en los archivos.

## Running develop mode
Ejecute `$ ionic serve` para levantar el proyecto de forma local y realizar cambios en los archivos.

## Generar APK
Antes de generar la APK, debe agregar las plataformas en las cuales desea degener, use el comando `$ ionic capacitor add [platform]`, la plataforma para agrerar (e.g. android, ios). Una ves inatalado la plataforma, ejecute el comando `$ ionic capacitor build [platform]`

## ENV
Copie el archivo `.env.example` que se encuentra en la raiz del proyecto, cree una carpeta `environments` dentro de `src` y copie 3 veces dentro de la carpeta y renombre los archivos como:
- environment.dev.ts
- environment.prod.ts
- environment.ts
al archivo `.env.prod` production key debe ser true, `.env.dev` production key debe ser false,  provea la url base de la api en la key `apiUrl`, la cual es *https://test.worldsacross.com/api/*
