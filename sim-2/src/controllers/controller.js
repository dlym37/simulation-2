module.exports = {
    create: (req, res, next) => { //SIM-2 74M
        const {id} = req.query;
        let {apartment} = req.session.address

        const index = apartment.findIndex (user => user.id == id);

        if(index === -1){
            const selectedUser = user.find(user => user.id == id);

            user.push(selectedUser);
        }
        res.status(200).send(req.session.address);//SIM-2 74L, 74H
    },

    read:
    update:
    delete:
}