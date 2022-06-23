import yaml from 'js-yaml';

const getParser = (data, extension) => {
    switch (extension) {
        case '.json':
            return JSON.parse(data);
        case '.yml':
        case '.yaml':
            return yaml.load(data);
        default:
            return new Error(`Invalid file extension: '${extension}'! Try supported formats.`);
    }
};
export default getParser;
