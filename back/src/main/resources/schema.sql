CREATE TABLE IF NOT EXISTS universities (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  en_name VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  open_id VARCHAR(64) UNIQUE,
  university_id VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS sessions (
  token VARCHAR(64) PRIMARY KEY,
  user_id BIGINT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  INDEX idx_sessions_user_id (user_id)
);
