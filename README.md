# Twitter graphql

Proof of concept of fullstack GraphQL application to evaluate tooling and workflow.

The application is a rebuild of a minimal verson of the twitter website.

- [Motivation](#motivation)  
- [Technologies](#technologies)  
- [Project structure](#project-structure)  
- [Notes](#notes)  

## Motivation

- Evaluate modern tooling
- Evaluate Workflow  
  - Fullstack development workflow  
  - Release workflow  
- Evaluate Integration with Typescript

## Technologies

- typescript  
- graphql   
- react  
- react-dom  
- [react-query](https://github.com/tannerlinsley/react-query)  
- [graphql-request](https://github.com/prisma-labs/graphql-request)  
- [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)  
- [apollo-express-server](https://github.com/apollographql/apollo-server)  
- [esbuild - custom](https://github.com/Jareechang/common-web/tree/master/packages/esbuild)  
  - client build only supports modern browser (due to limitation of transpiler)  

## Project structure

TODO

## Notes

`graphql-code-generator` automatically sources the graphql schemas and queries under `src/**` to generate
**Hooks** and **Typescript Typing**.

**The files are sourced from the following:**

- `src/graphql/schema.graphql` (generate the typing from GraphQL SDL)  
- `src/**/*.graphql` (Any queries which generates types and react-query hooks)  

The file destination is in `src/graphql/genernated.ts` (this file is not be edited by hand).
