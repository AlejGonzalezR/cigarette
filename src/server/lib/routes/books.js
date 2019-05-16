const { bookApiUrl } = require("../../config");
const axiosClient = require("../util/serviceClient");
let router = require("express").Router();


router.get("/", (req, res) => axiosClient.doRequest(`${bookApiUrl}${bookApiUrl}bookslibros/search`, req, res));
router.get("/search-favorites", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksfavoritos/search-favoritos`, req, res));
router.get("/citas", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookscita/citas-reservadas-todo`, req, res));
router.get("/citas-horarios", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookshorario/searchbtn`, req, res));
router.get("/citas-fechas/:fecha", (req, res) => axiosClient.doRequest(`${bookApiUrl}/bookscita/citas-reservadas-fecha/${req.params.fecha}`, req, res));
router.get("/bonos-pagados/:fechaSolicitada", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksregistroevaluaciones/bonos-pagados/${req.params.fechaSolicitada}`, req, res));
router.get("/content/", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookslibros/contenido-libro`, req, res));
router.get("/filter/:titulo/:genero/:nivel/:tipo", (req, res) => {
    const titulo = req.params.titulo;
    const genero = req.params.genero;
    const nivel = req.params.nivel;
    const tipo = req.params.tipo;
    
    
    return axiosClient.doRequest(`${bookApiUrl}bookslibros/filtrar-libros/${titulo}/${genero}/${nivel}/${tipo}`, req, res);
});
router.get("/filter-genders/:ids", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksgeneros/filter/${req.params.ids}`, req, res));
router.get("/details/:id", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookslibros/detalle-libro/${req.params.id}`, req, res));
router.get("/detail-vista/:id", (req, res) => {
    const id = req.params.id;
    return axiosClient.doRequest(`bookslibros/detalle-libro-vista/${id}`, req, res);
});
router.get("/:id", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookslibros/elementbyid/${req.params.id}`, req, res));


router.put("/edit-favorite/:id", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksfavoritos/put/${req.params.id}`, req, res));
router.put("/fin-lectura", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksprestamos/put-finalizar-lectura`, req, res));
router.put("/pagina-avance", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksprestamos/put-pagina-avance`, req, res));
router.post("/add-favorite", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksfavoritos/post/`, req, res));
router.post("/loan", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksprestamos/solicitar/`, req, res));

router.post("/contacto-bm", (req, res) => axiosClient.doRequest(`${bookApiUrl}booksmensajes/post/`, req, res));
router.post("/agendar-cita", (req, res) => axiosClient.doRequest(`${bookApiUrl}bookscita/post-cita`, req, res));




module.exports = router;