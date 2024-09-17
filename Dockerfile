FROM oven/bun:alpine

WORKDIR /src

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY .. .

CMD bun run dev