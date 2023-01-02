# Pipeline process

## development

- code gets pushed to GitHub (not on main)
- merged with main branch

## CircleCI

- build latest pushed code to main branch
  - install frontend & backend dependencies
  - lint code
  - build frontend
  - build backend
- hold for deploy approval
- deploy built code
  - setup aws-cli & eb-cli
  - deploy frontend code to s3
  - deploy backend code to eb
