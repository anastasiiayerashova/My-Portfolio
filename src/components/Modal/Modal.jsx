export default function Modal({ handleCloseModal }) {
    
return (
    <div className="work-backdrop" onClick={handleCloseModal}>
        <div className="work-modal">
             <button className="work-modal-close" onClick={handleCloseModal}>
              <svg className="work-icon-close" width="24" height="24">
               <use href="/src/img/icons.svg#icon-close"></use>
              </svg>
            </button>
            <h3 className="work-modal-title">thank you for your interest in cooperation!</h3>
            <p className="work-modal-text">The manager will contact you shortly to discuss further details and
             opportunities for cooperation. Please stay in touch</p>
        </div>
    </div>
    )
}