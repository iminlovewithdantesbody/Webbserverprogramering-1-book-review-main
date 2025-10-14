import app from"./app.mjs";

const port = 3000;

app.lisen(port, () => {
    console.log(`servern körs på port: ${port}`);
});
