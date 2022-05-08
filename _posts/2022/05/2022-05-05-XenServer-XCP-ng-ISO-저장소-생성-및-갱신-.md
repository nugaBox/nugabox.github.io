---
title: "XCP-ng ISO 저장소 생성 및 갱신 방법"
date: 2022-05-05 11:12:00 +0900
categories: [OS, Linux]
tags: [xcp-ng,xenserver]
---

## 저장소 생성
XenServer 및 XCP-ng에서 운영체제를 설치할 ISO 파일을 사용하기 위해서는 먼저 ISO 저장소를 생성해야 합니다.
1. `sr-create` 명령어를 사용하여 아래와 같이 옵션을 입력하고 저장소를 생성합니다.

    ```bash
    xe sr-create name-label=<name> type=iso \
    device-config:location=<where iso file exist> \
    device-config:legacy_mode=true \
    content-type=iso

    # 예 (xe의 위치가 /var/opt/xen/iso_import/xe인 경우)
    /var/opt/xen/iso_import/xe sr-create name-label=windows_iso type=iso \
    device-config:location=/var/opt/xen/iso_import/ \
    device-config:legacy_mode=true content-type=iso
    ```

2. 저장소 생성 후 `sr-list` 명령어를 사용하여 저장소 내의 ISO 파일의 UUID 등 정보를 조회할 수 있습니다.

    ```bash
    xe sr-list name-label=windows_iso
      uuid ( RO): 7bdf8f9c-ba67-eeba-ff59-ec590f8f3692
      name-label ( RW): iso-file
      name-description ( RW):
      host ( RO): xen12
      type ( RO): iso
      content-type ( RO): iso
    ```

## 파일 업로드
1. 파일질라와 같은 SFTP 툴을 이용해서 ISO 파일을 `/var/opt/xen/iso_import` 디렉토리에 업로드합니다.
2. `sr-list` 명령어로 업로드된 파일의 UUID를 조회합니다.
3. 업로드한 파일의 UUID와 `sr-scan` 명령어로 저장소를 재스캔하도록 합니다.

```bash
xe sr-scan uuid=7bdf8f9c-ba67-eeba-ff59-ec590f8f3692
```
