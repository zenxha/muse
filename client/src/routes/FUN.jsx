import Button from '../components/Button';
import {Link} from 'react-router-dom';

export function FUN() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h2
                style={{
                    fontSize: '20px',
                    color: 'azure',
                    marginBottom: '20px',
                }}
            >
                {"HAHA good luck for that, btw don't use your bank password or whatever on our website, we just simply hash it lol"}
            </h2>
            <Link to='/login'>
                <Button text='go back' />
            </Link>
        </div>
    );
}