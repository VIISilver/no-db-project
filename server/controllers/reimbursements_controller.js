var reimbursements = [];
var id = 0;

module.exports = {
    create: (req, res, next) => {
        var { name, date, miles, refund } = req.body;
        reimbursements.push({ id, name, date, miles, refund });
        id++;
        res.status(200).send( reimbursements );
    },
    read: (req, res, next) => {
        res.status(200).send( reimbursements );
    },
    update: (req, res, next) => {
        var { name, date, miles, refund } = req.body;
        var updateID = req.params.id;
        var reimbursementIndex = reimbursements.findIndex( reimbursement => reimbursement.id == updateID );
        var reimbursement = reimbursement[ reimbursementIndex ];

        reimbursement[ reimbursementIndex] ={
        id: reimbursement.id,
        name: name || reimbursements.name,
        date: date || reimbursements.date,
        miles: miles || reimbursements.miles,
        refund: refund || reimbursements.refund
        };
        res.status(200).send( reimbursements );
    },
    delete: (req, res, next) => {
        var deleteID = req.params.id;
        reimbursementsIndex = reimbursements.findIndex( reimbursement => reimbursement.id == deleteID );
        reimbursements.splice( reimbursementsIndex, 1);
        res.status(200).send( reimbursements );
    }
}