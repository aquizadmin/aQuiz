export default (req, res, next) => {
    if (req.body.response) return res.json(req.body.response);
    if (req.params.response) return res.json(req.params.response);
    if (req.query.response) return res.json(req.query.response);
    return next();
}
