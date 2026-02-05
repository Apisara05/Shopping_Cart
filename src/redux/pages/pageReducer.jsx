const initialState = {
  home: true,
};
// ฟอร์มเริ่มต้นของ state
const pagesReducer = (state = initialState, action) => {
  // ตัวจัดการ action
  switch (action.type) {
    case "HOME":
      return { home: true };
    case "CART":
      return { home: false };
    default:
      return state;
  }
};
export default pagesReducer;
