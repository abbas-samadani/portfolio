
export const GetPortfolios = (name, description, image, github, link) => {
    const params = new FormData();
    params.append('name', name);
    params.append('description', description);
    params.append('image', image);
    params.append('github', github);
    params.append('link', link);
    return params;
}

export const LoginData = (mobile) => {
    const params = new URLSearchParams();    
    params.append('mobile', mobile);
    return params;
}

export const LogoutData = (token) => {
    const params = new URLSearchParams();    
    params.append('token', token);
    return params;
}