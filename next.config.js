/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではreact testing libraryで使用するdata-testid属性を削除
        reactRemoveProperties: { properties: ['^data-testid$'] }
      }
    }
    return compilerConfig
  })()
}

module.exports = nextConfig
