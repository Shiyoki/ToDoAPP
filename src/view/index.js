import { EightBaseAppProvider } from '@8base/app-provider';
import Header from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

export default function Home(){
    //Endpoint del API donde se efectuan las funciones, esta guardado en variable de entorno por seguridad
    const ENDPOINT_URL = process.env.ENDPOINT_URL

    return(
        <div className="container w-1/3 h-1/3 ml-auto mr-auto mt-36 rounded-md p-6 shadow-md">
        <EightBaseAppProvider uri={ENDPOINT_URL} >
                {({ loading }) => loading ? <div>"Loading..."</div> : (
                <div >
                    <Header />
                    <Main />
                    <Footer />
                </div>
                )}
        </EightBaseAppProvider>
        </div>
        
    );
}