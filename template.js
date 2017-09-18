export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link rel='shortcut icon' type='image/png' href='public/favicon.png'/>
        </head>
        <body>
            <div id="content">
                ${body}
            </div>
            
            <script src="/public/site.bundle.js"></script>
        </body>
  `;
};