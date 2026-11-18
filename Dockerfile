
FROM public.ecr.aws/docker/library/node:24-alpine AS build
WORKDIR /app

# Cache dependencies separately from site content.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run check && npm run build

FROM public.ecr.aws/docker/library/nginx:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Replace the bundled welcome page with the complete static site.
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
