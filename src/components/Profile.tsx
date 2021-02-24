import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/47856024?s=460&u=a82527cbb19e8ae5a35614de33a2deb5843d290d&v=4" alt="Italo Gomes" />
      <div>
        <strong>Italo Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}