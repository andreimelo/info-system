import LayoutProvider from '../../../library/layout/index';
import { LoginForm } from '../../../library/common/components/Form';

function Login(){
	return (
		<LayoutProvider>
			<LoginForm />
		</LayoutProvider>
	);
}

export default Login;
