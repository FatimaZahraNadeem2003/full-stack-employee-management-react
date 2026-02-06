export const CommonStateHandler = (state: any, setState: any, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
        ...state,
        [name]: value
    });
};