import * as semver from 'semver';
export function isSemver(version: string): boolean{
    return semver.valid(version)!== null;
}
export function isPrerelease(version: string): boolean{
    return semver.prerelease(version)!== null;
}

export function removePrefix(version: string): string{
    const parsedVersiom
    return semver.prerelease(version)!== null;
}