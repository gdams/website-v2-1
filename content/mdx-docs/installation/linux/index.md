---
title: 'Linux (RPM/DEB/APK) installer packages'
authors: gdams, karianna, perlun, TheCrazyLex, TobiX, topaussie, sxa, tellison, luozhenyu
toc: true
---

Eclipse Temurin RPM and DEB packages are now available for installing on your favourite Linux distribution.

> See [Supported Platforms](/supported-platforms) for a list of our officially supported installers by Linux distribution / version. Other Linux distributions / versions are supported on a best effort basis.

> On most Linux systems you must have superuser privileges to install packages such as Temurin. You may need to prefix the commands below with `sudo` for them to succeed.

## Eclipse Temurin Package Names

The following name schema is being used:

```text
temurin-<version>-jdk
e.g temurin-17-jdk or temurin-8-jdk
```

## Deb installation on Debian or Ubuntu

Ensure the necessary packages are present:

```bash
apt install -y wget apt-transport-https
```

Download the Eclipse Adoptium GPG key:

```bash
mkdir -p /etc/apt/keyrings
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | tee /etc/apt/keyrings/adoptium.asc
```

Configure the Eclipse Adoptium apt repository. To check the full list of versions supported take a look at the list in the tree at https://packages.adoptium.net/ui/native/deb/dists/.

```bash
echo "deb [signed-by=/etc/apt/keyrings/adoptium.asc] https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list
```

> For Linux Mint (based on Ubuntu) you have to replace `VERSION_CODENAME` with `UBUNTU_CODENAME`.

Install the Temurin version you require:

```bash
apt update # update if you haven't already
apt install temurin-17-jdk
```

## CentOS/RHEL/Fedora Instructions

Add the RPM repo to `/etc/yum.repos.d/adoptium.repo` making sure to change the distribution name if you are not using CentOS/RHEL/Fedora. To check the full list of versions supported take a look at the list in the tree at https://packages.adoptium.net/ui/native/rpm/.

```bash
# Uncomment and change the distribution name if you are not using CentOS/RHEL/Fedora
# DISTRIBUTION_NAME=centos

cat <<EOF > /etc/yum.repos.d/adoptium.repo
[Adoptium]
name=Adoptium
baseurl=https://packages.adoptium.net/artifactory/rpm/${DISTRIBUTION_NAME:-$(. /etc/os-release; echo $ID)}/\$releasever/\$basearch
enabled=1
gpgcheck=1
gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
EOF
```

Install the Temurin version you require using `dnf`:

```bash
dnf install temurin-17-jdk
```

Alternatively, if you are using `yum`:

```bash
yum install temurin-17-jdk
```

## openSUSE/SLES Instructions

Import the RPM repo as follows. RPM’s are also available for SLES 12 and 15. To check the full list of versions supported take a look at https://packages.adoptium.net/ui/native/rpm/. The repositories may work with other versions but are not guaranteed and have not been tested.

```bash
zypper ar -f https://packages.adoptium.net/artifactory/rpm/opensuse/$(. /etc/os-release; echo $VERSION_ID)/$(uname -m) adoptium
```

Install the Temurin version you require:

```bash
zypper install temurin-17-jdk
```

## Alpine Linux Instructions

Download the Eclipse Adoptium RSA key:

```bash
wget -O /etc/apk/keys/adoptium.rsa.pub https://packages.adoptium.net/artifactory/api/security/keypair/public/repositories/apk
```

Configure the Eclipse Adoptium APK repository:

```bash
echo 'https://packages.adoptium.net/artifactory/apk/alpine/main' >> /etc/apk/repositories
```

Install the Temurin version you require:

```bash
apk add temurin-17-jdk
```

Please raise any issues over at https://github.com/adoptium/installer/issues.
