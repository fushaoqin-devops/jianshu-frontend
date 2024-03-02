import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { WriteWrapper, WriteTitle, WriteSubmit } from "./style";
import { add, finish } from "./writeSlice";
import { addToast } from "../auth/authSlice";

function Write() {
  const login = useSelector((state) => state.auth.login);
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const title = useRef(null);
  const dispatch = useDispatch();
  const submit = useSelector((state) => state.write.submit);
  const id = useSelector((state) => state.write.id);

  useEffect(() => {
    if (!login) {
      dispatch(addToast("请先登录"));
      navigate("/login");
    }
  }, [login, navigate, dispatch]);

  useEffect(() => {
    if (submit && id) {
      dispatch(finish());
      navigate(`/detail/${id}`);
    }
  }, [submit, navigate, id, dispatch]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = () => {
    dispatch(
      add({
        title: title.current.value,
        content: editorState.getCurrentContent().getPlainText(),
      })
    );
  };

  return login ? (
    <WriteWrapper>
      <WriteTitle ref={title}></WriteTitle>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <WriteSubmit onClick={handleSubmit}>提交</WriteSubmit>
    </WriteWrapper>
  ) : null;
}

export default Write;
