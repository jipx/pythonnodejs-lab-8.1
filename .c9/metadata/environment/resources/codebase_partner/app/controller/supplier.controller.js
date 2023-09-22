{"changed":false,"filter":false,"title":"supplier.controller.js","tooltip":"/resources/codebase_partner/app/controller/supplier.controller.js","value":"const Supplier = require(\"../models/supplier.model.js\");\n\n\nconst {body, validationResult} = require(\"express-validator\");\n\n\nexports.create = [\n\n    // Validate and sanitize the name field.\n    body('name', 'The supplier name is required').trim().isLength({min: 1}).escape(),\n    body('address', 'The supplier address is required').trim().isLength({min: 1}).escape(),\n    body('city', 'The supplier city is required').trim().isLength({min: 1}).escape(),\n    body('state', 'The supplier state is required').trim().isLength({min: 1}).escape(),\n    body('phone', 'Phone number should be 10 digit number plus optional country code').trim().isMobilePhone().escape(),\n\n    // Process request after validation and sanitization.\n    (req, res, next) => {\n\n        // Extract the validation errors from a request.\n        const errors = validationResult(req);\n\n        // Create a genre object with escaped and trimmed data.\n        const supplier = new Supplier(req.body);\n\n        if (!errors.isEmpty()) {\n            // There are errors. Render the form again with sanitized values/error messages.\n            res.render('supplier-add', {title: 'Create Genre', supplier: supplier, errors: errors.array()});\n        } else {\n            // Data from form is valid., save to db\n            Supplier.create(supplier, (err, data) => {\n                if (err)\n                    res.render(\"500\", {message: `Error occurred while creating the Supplier.`});\n                else res.redirect(\"/suppliers\");\n            });\n        }\n    }\n];\n\nexports.findAll = (req, res) => {\n    Supplier.getAll((err, data) => {\n        if (err)\n            res.render(\"500\", {message: \"The was a problem retrieving the list of suppliers\"});\n        else res.render(\"supplier-list-all\", {suppliers: data});\n    });\n};\n\nexports.findOne = (req, res) => {\n    Supplier.findById(req.params.id, (err, data) => {\n        if (err) {\n            if (err.kind === \"not_found\") {\n                res.status(404).send({\n                    message: `Not found Supplier with id ${req.params.id}.`\n                });\n            } else {\n                res.render(\"500\", {message: `Error retrieving Supplier with id ${req.params.id}`});\n            }\n        } else res.render(\"supplier-update\", {supplier: data});\n    });\n};\n\n\nexports.update = [\n\n    // Validate and sanitize the name field.\n    body('name', 'The supplier name is required').trim().isLength({min: 1}).escape(),\n    body('address', 'The supplier address is required').trim().isLength({min: 1}).escape(),\n    body('city', 'The supplier city is required').trim().isLength({min: 1}).escape(),\n    body('state', 'The supplier state is required').trim().isLength({min: 1}).escape(),\n    body('phone', 'Phone number should be 10 digit number plus optional country code').trim().isMobilePhone().escape(),\n\n    // Process request after validation and sanitization.\n    (req, res, next) => {\n\n        // Extract the validation errors from a request.\n        const errors = validationResult(req);\n\n        // Create a genre object with escaped and trimmed data.\n        const supplier = new Supplier(req.body);\n        supplier.i\n\n        if (!errors.isEmpty()) {\n            // There are errors. Render the form again with sanitized values/error messages.\n            res.render('supplier-update', {supplier: supplier, errors: errors.array()});\n        } else {\n            // Data from form is valid., save to db\n            Supplier.updateById(\n                req.body.id,\n                supplier,\n                (err, data) => {\n                    if (err) {\n                        if (err.kind === \"not_found\") {\n                            res.status(404).send({\n                                message: `Supplier with id ${req.body.id} Not found.`\n                            });\n                        } else {\n                            res.render(\"500\", {message: `Error updating Supplier with id ${req.body.id}`});\n                        }\n                    } else res.redirect(\"/suppliers\");\n                }\n            );\n        }\n    }\n];\n\nexports.remove = (req, res) => {\n    Supplier.delete(req.params.id, (err, data) => {\n        if (err) {\n            if (err.kind === \"not_found\") {\n                res.status(404).send({\n                    message: `Not found Supplier with id ${req.params.id}.`\n                });\n            } else {\n                res.render(\"500\", {message: `Could not delete Supplier with id ${req.body.id}`});\n            }\n        } else res.redirect(\"/suppliers\");\n    });\n};\n\nexports.removeAll = (req, res) => {\n    Supplier.removeAll((err, data) => {\n        if (err)\n            res.render(\"500\", {message: `Some error occurred while removing all suppliers.`});\n        else res.send({message: `All Suppliers were deleted successfully!`});\n    });\n};","undoManager":{"mark":-1,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":25},"end":{"row":16,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1694463692000}