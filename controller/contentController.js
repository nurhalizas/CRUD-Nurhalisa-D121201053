const Content = require('../models/contentModel');

module.exports = {
    index:(req,res,next) => {
        Content.fetchData(req.db, (err, rows) => {
            if(err) {
                req.flash('error', `${error.message}`)
                req.render('content/index', {data: ''});
            } else{
                res.render('content/index', {data: rows})
            }
        })
    },
    store: (req, res) =>{
        const{id, nama, departemen, angkatan}= req.body;
        var form_data={
            id,
            nama,
            departemen,
            angkatan,
        }
        Content.insertData(req.db, form_data, (err, result) => {
            if(err){
                req.flash('error', `${error.message}`);
                req.redirect('/content');
            }else {
                req.flash('success','Data Berhasil dimasukkan ke database');
                res.redirect('/content');
            }
        })
    },
    update:(req, res) => {
        const{ id, nama, departemen, angkatan}= req.body;
        var form_data ={
            id, 
            nama, 
            departemen,
            angkatan,
        }
        Content.updateData(req.db, id, form_data, (err, result)=>{
            if(err){
                req.flash('error', `${error.message}`);
                req.redirect('/content');
            }else {
                req.flash('success','Data Berhasil di Update');
                res.redirect('/content');
            }
        })
    },
    delete: (req, res) => {
        const{id} = req.params;
        Content.deleteData(req.db, id, (err)=>{
            if(err) {
                req.flash('error', `${error.message}`);
                res.redirect('/content')
            }
            else{
                req.flash('success', 'Data Berhasil di hapus');
                res.redirect('/content')
            }
        })

    }
}