let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4OTU3NTY1LCJpYXQiOjE3MTg5NTcyNjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY5MDY5ZjU2LWVkZjQtNDNjZC04YzQ3LWQ2NGI1ZTdlMTlhMiIsInN1YiI6InZhc2FudGg5ODQyM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJ2Q2FydCIsImNsaWVudElEIjoiZjkwNjlmNTYtZWRmNC00M2NkLThjNDctZDY0YjVlN2UxOWEyIiwiY2xpZW50U2VjcmV0IjoiaVZ1RWd1bmpvR2dVWWN4VCIsIm93bmVyTmFtZSI6InZhc2FudGhha3VtYXIiLCJvd25lckVtYWlsIjoidmFzYW50aDk4NDIzQGdtYWlsLmNvbSIsInJvbGxObyI6IjcyNzYyMWJpdDAyNSJ9.tuF_Yva5ltFCtvs3LysUqvtGRxGfUI8H96PvTXhVc7o"
const fetchingToken = (req, res) => {
  fetch("http://20.244.56.144/test/auth", {
    method: "POST",
    body: JSON.stringify({
      companyName: "vCart",
      clientID: "f9069f56-edf4-43cd-8c47-d64b5e7e19a2",
      clientSecret: "iVuEgunjoGgUYcxT",
      ownerName: "vasanthakumar",
      rollNo: "727621bit025",
      ownerEmail: "vasanth98423@gmail.com",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res)=>res.json())
  .then((response)=>{return response.access_token})
  .catch((Err)=>console.log(Err));
};

const productByCategory = (req, res) => {
  const { categoryname, n } = req.params;
  fetch(
    `http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=${n}&minPrice=1&maxPrice=100000`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((products) => {
      products.forEach((product, index) => {
        product.id = index + 1;
      });
      res.status(200).json(products);
    })
    .catch((resp) => res.status(400).json(resp));
  console.log(categoryname);
};

const productsByRange = (req, res) => {
  const { categoryname, n } = req.params;
  const { priceRange } = req.body;
  const { min, max } = priceRange;
  console.log(categoryname, n, min, max);
  fetch(
    `http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=${n}&minPrice=${min}&maxPrice=${max}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((products) => {
      products.forEach((product, index) => {
        product.id = index + 1;
      });
      res.status(200).json(products);
    })
    .catch((resp) => res.status(400).json(resp));
};
const companyProduct = (req, res) => {
  const { companyname, categoryname } = req.params;
  // console.log(companyname,categoryname)
  fetch(
    `http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=10&minPrice=1&maxPrice=10000`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((resp) => res.status(200).json(resp))
    .catch((resp) => res.status(400).json(resp));
};
module.exports = { productByCategory, productsByRange, companyProduct ,fetchingToken};
