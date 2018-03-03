let i = 0;

const fn = (req, res) => {
    i++;
    res.end(i.toString());
};

module.exports = fn;
