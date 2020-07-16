export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/hello-world', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.
        res.render('hello-world', {
            title: 'Atlassian Connect'
            //issueId: req.query['issueId']
        });
    });

    // Add additional route handlers here...
    app.get('/web-panel-issues', function(req,res){
        res.render("web-panel-issues", {id : 1, type : 11 });
    });
    app.get('/web-panel-reports', function(req,res){
       res.render("web-panel-reports", {id : req.query['id'], type : req.query['type'] });
    });

    
}
