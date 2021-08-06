<div align="center">
    <a target="_blank" href="https://admin.senseui.im/">
        <img height="100" src="./public/img/logo.svg" alt="logo" >
    </a><br>
    <p align='center'>
        <a href='https://github.com/vitejs/vite'>
            <img src='https://img.shields.io/badge/Vite-^2.0.0-000000?style=flat&labelColor=646cff' alt='vite version'>
        </a>
        <a href='https://github.com/vitejs/awesome-vite'>
            <img src='https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg' alt='Awesome'>
        </a>
    </p>
    <h1> ABT：admin base template</h1>
</div>

English | [中文](./README.zh-CN.md)

## Introduction
admin-base-template is a free and open source admin template kit. using `vite2`. Technology stack is `Vue2`,`Element UI`,`Typescript`.
## Preview

Demo: [admin-base-template](http://admin.senseui.im/)

![pewview](./public/img/preview.gif)

### Base module
> 

- [x] Login/Logout: token manage
- [x] Permission: router/element/api
- [x] Multi-language: Surport image 
- [x] Theme Handover: using css var()
- [x] Responsive Layout: for`PC/iPad/Phone`
- [x] Mock Data(`mock/` Api)

### ToDo 

- [ ] Code refactoring style for Element UI using css var()
- [ ] add Material Design style

### Mock Data
Mock Data can Using [~~vite-plugin-mock~~](https://github.com/anncwb/vite-plugin-mock), or you can run [mock-api](https://github.com/artskin/express-for-vercel) in local
### Install

```bash
npm install
```
### Development

```bash
npm run dev
```
### Production

```bash
npm run build
```
### Preview

```bash
npm run serve
```

## Acknowledgements

- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template/) 
- [demo.adminkit.io](https://demo.adminkit.io/index.html)
- [animate.style](https://animate.style/)
