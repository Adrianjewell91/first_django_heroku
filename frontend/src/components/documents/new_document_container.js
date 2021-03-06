import { connect } from "react-redux";
import { createDocument } from "../../actions/documents_actions";
import DocumentForm from "./new_document";
import { createTranslation } from "../../actions/translation_actions";

const mapStateToProps = state => {
  return {
    documents: Object.values(state.entities.documents),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: formDocument => dispatch(createDocument(formDocument)),
    createTranslation: (doc_id, formTranslation) => dispatch(createTranslation(doc_id, formTranslation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentForm);
