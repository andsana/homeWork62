import './Contacts.css';
const Contacts = () => {
  return (
    <div className="contacts container row mt-5 m-auto">
      <div className="contact col-md-4 mb-3">
        <h5>Зказать звонок:</h5>
        <p>+7 (812) 613-78-90</p>
      </div>
      <div className="contact col-md-4 mb-3">
        <h5>Режим работы операторов:</h5>
        <p>с 9:00 до 21:00</p>
      </div>
      <div className="contact col-md-4 mb-3">
        <h5>Центральный офис:</h5>
        <p>Санкт-Петербург, Гатчинская, 26</p>
      </div>
      <div className="contact col-md-4 mb-3">
        <h5>Интернет-магазин:</h5>
        <p>help@british-bakery.ru</p>
      </div>
      <div className="contact col-md-4 mb-3">
        <h5>Отдел маркетинга:</h5>
        <p>marketing@baltic-bread.ru</p>
      </div>
      <div className="contact col-md-4">
        <h5>Отдел закупок:</h5>
        <p>zakupka@baltic-bread.ru</p>
      </div>
    </div>
  );
};

export default Contacts;