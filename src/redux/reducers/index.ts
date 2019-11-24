export default (initialState: any = {}, action: any) => {
    switch  (action.type) {
        case 'LOGIN': {
            return {};
        }
        default:
            return initialState;
    }
};
