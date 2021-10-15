function getAll() {
  return fetch("sdsadsadasd") //vzzemi knigite ot tozi adres
    .then((res) => res.json()) //responsa go napravi na json vra6ta promis
    .catch(error => console.log(error))
}

export default {
    getAll
}
