function calculateSum(n) {
        let ans = 0;
        for (let i = 0; i <= n; i++) {
            ans = ans + i;
        }
        return ans;
    }
    app.get('/', (req, res) => {
        const n = req.query.n
        const ans = calculateSum(n)
        res.send(ans.toString());
    });